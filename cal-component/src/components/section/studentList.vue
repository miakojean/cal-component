<template>
  <div class="student__list">
    <div class="header__list">
      <h4>Liste des étudiants de la classe</h4>
      <div class="classe__tuition">
        <p>Classes</p>
        <p>Scolarité</p>
      </div>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>N°</th>
            <th>Nom</th>
            <th>Prénoms</th>
            <th>Genre</th>
            <th>Date de naissance</th>
            <th>Date d'ajout</th>
            <th>Nom du parent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.id">
            <th> 
              <checkBox 
                :model-value="checkedStudents[index]"
                @update:model-value="updateChecked(index, $event)"
                @checked="handleChecked(index, $event)"
                @change="handleChange(index, $event)"/> 
            </th>
            
            <th>{{ index + 1 }}</th>
            
            <th v-if="!isEditing">{{ student.nom }}</th>
            <td v-else><research-box /></td>
            
            <td v-if="!isEditing">{{ student.prenoms }}</td>
            <td v-else><research-box /></td>
            
            <td v-if="!isEditing">{{ student.genre }}</td>
            <td v-else><research-box /></td>
            
            <td v-if="!isEditing">{{ student.dateDeNaissance }}</td>
            <td v-else><research-box /></td>
            
            <td v-if="!isEditing">{{ student.dateAjout }}</td>
            <td v-else><research-box /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, watch } from 'vue';
import ResearchBox from '../input/researchBox.vue';
import CheckBox from '../input/checkBox.vue';

export interface Student {
  id: number | string;
  nom: string;
  prenoms: string;
  genre: string;
  dateDeNaissance: string;
  dateAjout: string;
  nomParent: string;
}

export default defineComponent({
  name: 'StudentList',
  components: {
    ResearchBox,
    CheckBox
  },
  props: {
    students: {
      type: Array as PropType<Student[]>,
      required: true,
      default: () => [
        { 
          id: 1,
          nom: "LOKOU", 
          prenoms: "Gaelle", 
          genre: "féminin", 
          dateDeNaissance: "12/09/1999",
          dateAjout: "",
          nomParent: ""
        },
        { 
          id: 2,
          nom: "PANAN", 
          prenoms: "Jennifer Amélie", 
          genre: "féminin", 
          dateDeNaissance: "12/09/1999",
          dateAjout: "",
          nomParent: ""
        },
      ]
    }
  },
  emits: ['handle-modify', 'selection-changed'],
  
  setup(props, { emit }) {
    const isEditing = ref(false);
    const checkedStudents = ref<boolean[]>([]);

    // Initialiser le tableau des checkboxes
    const initializeCheckedStudents = () => {
      checkedStudents.value = Array(props.students.length).fill(false);
    };

    // Initialiser au montage et surveiller les changements de students
    initializeCheckedStudents();
    watch(() => props.students, initializeCheckedStudents, { deep: true });

    const updateChecked = (index: number, value: boolean) => {
      checkedStudents.value[index] = value;
      emit('selection-changed', getSelectedStudents());
    };

    const handleChecked = (index: number, checked: boolean) => {
      console.log(`Checkbox ${index} checked:`, checked);
      console.log('Student:', props.students[index]);
    };

    const handleChange = (index: number, checked: boolean) => {
      console.log(`Checkbox ${index} changed:`, checked);
    };

    const modifyInput = () => {
      isEditing.value = !isEditing.value;
      emit('handle-modify');
    };

    // Méthode pour obtenir les étudiants sélectionnés
    const getSelectedStudents = () => {
      return props.students.filter((_, index) => checkedStudents.value[index]);
    };

    // Méthode pour sélectionner/désélectionner tous
    const selectAll = (select: boolean) => {
      checkedStudents.value = Array(props.students.length).fill(select);
      emit('selection-changed', getSelectedStudents());
    };

    return {
      checkedStudents,
      isEditing,
      updateChecked,
      handleChecked,
      handleChange,
      modifyInput,
      selectAll,
      getSelectedStudents
    };
  }
});
</script>

<style scoped>
/* Vos styles restent inchangés */
.table-container {
  max-height: 500px;
  overflow-y: auto;
}

.header__list{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
}

.classe__tuition{
  display: flex;
  gap: 2rem;
}

table{
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border-collapse: collapse;
}
th, td{
  padding: 0.8rem;
  text-align: left;
}
tr{
  transition: 0.5s;
  cursor: pointer;
}
tr:hover{
  background: #f1f1f1;
  transition: 0.3s ease-in;
}
thead{
  background: #e6e4e4;
  border-radius: 0.5rem;
}
thead th {
  position: sticky;
  top: 0;
  background: #e6e4e4; 
  z-index: 1;
}
.student__list{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
}
.add__students{
  cursor: pointer;
  transition: 0.3 ease-in;
}
.add__students:hover{
  text-decoration: underline;
  transition: 0.5 ease-in;
}
</style>