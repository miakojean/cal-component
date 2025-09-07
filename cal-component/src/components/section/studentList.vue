<template>
  <div class="student__list">
    <div class="header__list">
      <h4>Liste des étudiants de la classe</h4>
      <p class="add__students">Ajouter un élève</p>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nom</th>
            <th>Prénoms</th>
            <th>Genre</th>
            <th>Date de naissance</th>
            <th>Date d'ajout</th>
            <th>Nom du parent</th>
            <th>Contact du parent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.id">
            <th>{{ index + 1 }}</th>
            <th>{{ student.nom }}</th>
            <td>{{ student.prenoms }}</td>
            <td>{{ student.genre }}</td>
            <td>{{ student.dateDeNaissance }}</td>
            <td>{{ student.dateAjout }}</td>
            <td>{{ student.nomParent }}</td>
            <td>{{ student.contactParent }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentList',
  props: {
    // On définit la prop "students" que le composant attend
    students: {
      type: Array, // C'est un tableau
      required: true, // Il est obligatoire de la fournir
      default: () => [
        {nom:"LOKOU", prenoms:"Gaelle", genre:"féminin", dateDeNaissance:"12/09/1999"}
      ] // Valeur par défaut si rien n'est passé
    }
  }
}
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
  justify-content: space-between;
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