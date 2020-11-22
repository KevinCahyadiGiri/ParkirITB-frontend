<template>
  <v-app>
      <div class="header">
            <div class="logoContainer text-xs-center">
                <img src="@/assets/logoitb.png" width=60 height=60 class="image" />
            </div>
            <div class="sarprasContainer">
                <div class="sarprasitb">Direktorat Sarana dan Prasarana ITB</div>
                <div style="font-size: 13px">Jl. Ganesha No 10, Gd. CRCS Lt.5 Bandung 40132</div>
            </div>
      </div>
      <div class="halo">
          <div class="haloalex">
              Layanan Parkir
          </div>
      </div>
      <div class="parkirNriwayat">
          <div>
            <v-btn color="#86b9ff" tile elevation=0 @click="logSemua()">
                Log Parkir Mahasiswa
            </v-btn>
          </div>
          <div>
            <v-btn color="#86b9ff" tile elevation=0 @click="saldoSemua()">
                Data Saldo Mahasiswa
            </v-btn>
          </div>
      </div>
      <div v-if="itemsTable.length !== 0" class="halo2">
          <div class="haloalex2">
              Log Keluar Masuk
          </div>
          <v-data-table
            :headers="headersTable"
            :items="itemsTable"
            :items-per-page="5"
          >
          </v-data-table>
      </div>
      <div v-if="itemsTableSaldo.length !== 0" class="halo2">
          <div class="haloalex2">
              Saldo Mahasiswa
          </div>
          <v-data-table
            :headers="headersTableSaldo"
            :items="itemsTableSaldo"
            :items-per-page="5"
          >
          </v-data-table>
      </div>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        saldo: null,
        headersTable: [
            {
                text: 'Waktu',
                align: 'start',
                sortable: 'true',
                value: 'waktu'
            },
            {text: 'Nama', value: 'namamahasiswa'},
            {text: 'NIM', value: 'nim'},
            {text: 'Keluar / Masuk', value: 'status'},
            {text: 'Tempat Parkir', value: 'parkiran'}
        ],
        itemsTable: [],
        headersTableSaldo: [
            {
                text: 'NIM',
                align: 'start',
                sortable: 'true',
                value: 'nim'
            },
            {text: 'Nama', value: 'namamahasiswa'},
            {text: 'Saldo', value: 'nim'},
        ],
        itemsTableSaldo: [],
    }),
    methods: {
        logSemua() {
            this.$axios.get('https://blooming-atoll-42885.herokuapp.com/log')
                .then(res => {
                    for (let i=0; i < res.data.data.length; i++) {
                        var log = {};
                        log['waktu'] = res.data.data[i].waktu.split(" ").slice(0,5).join(' ');
                        log['namamahasiswa'] = res.data.data[i].namamahasiswa;
                        log['nim'] = res.data.data[i].nim;
                        log['status'] = res.data.data[i].status;
                        log['parkiran'] = res.data.data[i].parkiran;
                        this.itemsTable.push(log);
                    }
                    
                })
        },
        saldoSemua() {
            this.$axios.get('https://blooming-atoll-42885.herokuapp.com/saldo')
                .then(res => {
                    for (let i=0; i < res.data.data.length; i++) {
                        var log = {};
                        log['nim'] = res.data.data[i].nim;
                        log['namamahasiswa'] = res.data.data[i].namamahasiswa;
                        log['saldo'] = res.data.data[i].saldo;
                        this.itemsTableSaldo.push(log);
                    }
                })
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 30px 40px;
    justify-content: center;
}
.logoContainer {
    /* width: 30%; */
    margin: 0 30px;
}
.sarprasContainer {
    /* background-color: red; */
    /* width: 70%; */
}
.sarprasitb {
    font-weight: bolder;
    font-size: 20px;
}
.halo {
    text-align: center;
    background-color: #c3c3c3;
    padding: 10px;
}
.haloalex {
    font-weight: bolder;
}
.halo2 {
    text-align: center;
    border: 1px solid black;
    padding: 10px;
}
.haloalex2 {
    font-weight: bolder;
    margin-bottom: 20px;
}
.parkirNriwayat {
    text-align: center;
}
.parkirNriwayat > div {
    margin: 25px;
}
.v-btn {
    text-transform: capitalize;
}
</style>