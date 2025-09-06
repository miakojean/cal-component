<template>
  <div class="student__list">
    <div class="header__list">
      <h4>Liste des étudiants de la classe</h4>
      <p>Ajouter un élève</p>
    </div>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Nom</th>
          <th>Prenoms</th>
          <th>Genre</th>
          <th>Date de naissance</th>
          <th>Date d'ajout</th>
          <th>Nom du parent</th>
          <th>Contact du parent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>2</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>3</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>4</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>5</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>6</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>7</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>8</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>9</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
        <tr>
          <th>10</th>
          <th>Koné</th>
          <td>Aline Séphora Mira</td>
          <td>Masculin</td>
          <td>23/09/2009</td>
          <td>06/09/2025</td>
          <td>DAGO Galo Jeanne d'Arc</td>
          <td>0777769581 / 0101292502</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.table-container {
  max-height: 400px; /* <-- Définissez ici la hauteur maximale que vous souhaitez */
  overflow-y: auto;  /* <-- Affiche une barre de défilement verticale si le contenu dépasse la hauteur */
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
  position: sticky; /* Rend l'élément "collant" */
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
</style>