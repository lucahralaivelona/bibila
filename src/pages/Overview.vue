<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-money-coins text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Revenue Actuelle</p>
              <h4 class="card-title">800000Ar</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Ce mois-ci</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-circle-09 text-info"></i>
            </div>
            <div slot="content">
              <p class="card-category">Clients actifs</p>
              <h4 class="card-title">{{ TotalUtilisateur }}</h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>Ce mois-ci</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-delivery-fast text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Voitures déjà louées</p>
              <h4 class="card-title">{{ TotalLouee }}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Six derniers mois
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-bus-front-12 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Voitures disponibles</p>
              <h4 class="card-title">{{ TotalDisponible }}</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Maintenant</div>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card
            :chart-data="lineChart.data"
            :chart-options="lineChart.options"
            :responsive-options="lineChart.responsiveOptions"
          >
            <template slot="header">
              <h4 class="card-title">Chiffre d'affaire statistique</h4>
              <p class="card-category">Statistique des huit derniers mois</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i>
                <i class="fa fa-circle text-danger"></i>
                <i class="fa fa-circle text-warning"></i>
              </div>
              <hr />
              <div class="stats">
                <i class="fa fa-history"></i> Mise à jour il y a 3 minutes
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Camembert des voitures</h4>
              <p class="card-category">derniers jours</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i>
                <i class="fa fa-circle text-danger"></i>
                <i class="fa fa-circle text-warning"></i>
              </div>
              <hr />
              <div class="stats">
                <i class="fa fa-clock-o"></i> Mise à jour il y a 3 minutes
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <!-- <div class="row">
            <div class="col-md-6">
                <chart-card :chart-data="barChart.data" :chart-options="barChart.options" :chart-responsive-options="barChart.responsiveOptions" chart-type="Bar">
                    <template slot="header">
                        <h4 class="card-title">2014 Sales</h4>
                        <p class="card-category">All products including Taxes</p>
                    </template>
                    <template slot="footer">
                        <div class="legend">
                            <i class="fa fa-circle text-info"></i> Tesla Model S
                            <i class="fa fa-circle text-danger"></i> BMW 5 Series
                        </div>
                        <hr>
                        <div class="stats">
                            <i class="fa fa-check"></i> Data information certified
                        </div>
                    </template>
                </chart-card>
            </div>

            <div class="col-md-6">
                <card>
                    <template slot="header">
                        <h5 class="title">Tasks</h5>
                        <p class="category">Backend development</p>
                    </template>
                    <l-table :data="tableData.data" :columns="tableData.columns">
                        <template slot="columns"></template>

                        <template slot-scope="{row}">
                            <td>
                                <base-checkbox v-model="row.checked"></base-checkbox>
                            </td>
                            <td>{{row.title}}</td>
                            <td class="td-actions text-right">
                                <button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button type="button" class="btn-simple btn btn-xs btn-danger" v-tooltip.top-center="deleteTooltip">
                                    <i class="fa fa-times"></i>
                                </button>
                            </td>
                        </template>
                    </l-table>
                    <div class="footer">
                        <hr>
                        <div class="stats">
                            <i class="fa fa-history"></i> Updated 3 minutes ago
                        </div>
                    </div>
                </card>
              </div> 
            </div>-->
    </div>
  </div>
</template>

<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import axios from "axios";
// import Chart from 'chart.js/auto';

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
  },
  data() {
    return {
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      //
      rented: [],
      totalPrix: 0,
      //
      utilisateur: [],
      TotalUtilisateur: 0,
      //
      rented: [],
      TotalLouee: 0,
      //
      car: [],
      TotalDisponible: 0,
      //

      pieChart: {
        data: {
          labels: ["5 Disponible", "2 en location"],
          series: [60, 40],
        },
      },
      lineChart: {
        data: {
          labels: [
            "Novembre",
            "Décembre",
            "Janvier",
            "Fevrier",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
          ],
          series: [
            [187, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
          ],
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      barChart: {
        data: {
          labels: [
            "Jan",
            "Fev",
            "Mar",
            "Avr",
            "Mai",
            "Juin",
            "Juil",
            "Aôut",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
          ],
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false,
          },
          height: "245px",
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      tableData: {
        data: [
          {
            title:
              'Sign contract for "What are conference organizers afraid of?"',
            checked: false,
          },
          {
            title:
              "Lines From Great Russian Literature? Or E-mails From My Boss?",
            checked: true,
          },
          {
            title:
              "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            checked: true,
          },
          {
            title: "Create 4 Invisible User Experiences you Never Knew About",
            checked: false,
          },
          {
            title: 'Read "Following makes Medium better"',
            checked: false,
          },
          {
            title: "Unfollow 5 enemies from twitter",
            checked: false,
          },
        ],
      },
    };
  },

  //
  async created() {
    try {
      const response = await axios.get(
        "https://gestionlocationvoiture.onrender.com/api/v1/Rented/"
      );
      this.rented = response.data;
      this.calculateTotalPrix();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations de location:",
        error
      );
    }

    try {
      const response = await axios.get(
        "https://gestionlocationvoiture.onrender.com/api/v1/Users"
      );
      this.utilisateur = response.data;
      this.CalculTotalUtilisateur();
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    }

    //
    try {
      const response = await axios.get(
        "https://gestionlocationvoiture.onrender.com/api/v1/Rented/"
      );
      this.rented = response.data;
      this.VoituresLouees();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération les voitures louées:",
        error
      );
    }
    //

    try {
      const response = await axios.get(
        "https://gestionlocationvoiture.onrender.com/api/v1/car"
      );
      this.car = response.data;
      this.VoituresDisponibles();
      // this.updatePieChart();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération les voitures louées:",
        error
      );
    }
  },
  methods: {
    calculateTotalPrix() {
      this.totalPrix = this.rented.reduce((total, rented) => {
        const prixTotal = parseInt(rented.prixTotal);
        return total + prixTotal;
      }, 0);
    },

    //
    CalculTotalUtilisateur() {
      this.TotalUtilisateur = this.utilisateur.reduce((total) => {
        const utilisateur = parseInt(1);
        return total + utilisateur;
      }, 0);
    },

    VoituresLouees() {
      this.TotalLouee = this.rented.reduce((total) => {
        const louee = parseInt(1);
        return total + louee;
      }, 0);
    },

    VoituresDisponibles() {
      this.TotalDisponible = this.car.reduce((total) => {
        const dispo = parseInt(1);
        return total + dispo;
      }, 0);
      //    this.updatePieChart();
    },
    //     updatePieChart() {
    // //   this.pieChart.data.labels = [`${this.TotalDisponible} Disponible`, '30'];
    // //   this.pieChart.data.series = [60, 40];
    // this.pieChart.data.labels = ['60', '40'];
    //   this.pieChart.data.series = [60, 40];
    // }
  },
};
//
</script>

<style>
</style>
