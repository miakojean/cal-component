<template>
  <div class="student__list">
    <div class="header__list">
      <h4>Liste des étudiants de la classe scolarité</h4>
      <div class="classe__tuition">
        <p class="nav__items" :class="{ active: activeTab === 'classes' }" @click="setActiveTab('classes')">
          Classes
        </p>
        <p class="nav__items" :class="{ active: activeTab === 'scolarite' }" @click="setActiveTab('scolarite')">
          Scolarité
        </p>
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
            <th>1er versement</th>
            <th>2e versement</th>
            <th>3e versement</th>
            <th>4e versement</th>
            <th>5e versement</th>
            <th>Statut</th>
            <th>Action</th>
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
            
            <td v-if="!isEditing">{{ student.firstInstallment }}</td>
            <td v-else><research-box /></td>
            
            <td v-if="!isEditing">{{ student.secondInstallment }}</td>
            <td v-else><research-box /></td>
            
            <td v-if="!isEditing">{{ student.thirdInstallment }}</td>
            <td v-else><research-box /></td>

            <td v-if="!isEditing">{{ student.fourthInstallment }}</td>
            <td v-else><research-box /></td>

            <td v-if="!isEditing">{{ student.fifthInstallment }}</td>
            <td v-else><research-box /></td>

            <td v-if="!isEditing">{{ student.status }}</td>
            <td v-else><research-box /></td>

            <td class="actions">
              <i class="ri-edit-box-line"></i>
              <i class="ri-delete-bin-6-line"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, watch } from 'vue';
import { useRouter } from 'vue-router';
import ResearchBox from '../input/researchBox.vue';
import CheckBox from '../input/checkBox.vue';

export interface Student {
  id: number | string;
  nom: string;
  prenoms: string;
  firstInstallment: number;
  secondInstallment: number;
  thirdInstallment: number;
  fourthInstallment: number;
  fifthInstallment: number;
  status: string;
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
          firstInstallment: 10000, 
          secondInstallment: 0,
          thirdInstallment: 0,
          fourthInstallment: 0,
          fifthInstallment: 0,
          status: "Active"
        },
        { 
          id: 2,
          nom: "PANAN", 
          prenoms: "Jennifer Amélie", 
          firstInstallment: 10000, 
          secondInstallment: 0,
          thirdInstallment: 0,
          fourthInstallment: 0,
          fifthInstallment: 0,
          status: "Active"
        },
      ]
    }
  },
  emits: ['handle-modify', 'selection-changed'],
  
  setup(props, { emit }) {
    const isEditing = ref(false);
    const checkedStudents = ref<boolean[]>([]);
    const activeTab = ref('scolarite');
    const router = useRouter();

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
      router.push(`/dashboard`)
    };

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
      activeTab,
      router,
      setActiveTab,
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
.student__list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
}

.header__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
}

.classe__tuition {
  display: flex;
  gap: 2rem;
  position: relative;
  padding-bottom: 1px;
  border-bottom: 1px solid #e0e0e0;
}

.nav__items {
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  color: #666;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav__items:hover {
  color: #333;
}

.nav__items.active {
  color: #2563eb;
  font-weight: 600;
}

.nav__items::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #2563eb;
  border-radius: 2px 2px 0 0;
  transition: width 0.3s ease;
}

.nav__items.active::before {
  width: 100%;
}

.nav__items:hover::before {
  width: 100%;
  background-color: #ccc;
}

.nav__items.active:hover::before {
  background-color: #2563eb;
}

.table-container {
  max-height: 500px;
  overflow-y: auto;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 2rem;
}

.add__students {
  cursor: pointer;
  transition: 0.3s ease-in;
}

.add__students:hover {
  text-decoration: underline;
}
</style>