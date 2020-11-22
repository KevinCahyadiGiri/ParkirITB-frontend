<template>
  <v-app class="mainContainer">
      <div class="header">
            <div class="logoContainer text-xs-center">
                <img src="@/assets/logoitb.png" width=60 height=60 class="image" />
            </div>
            <div class="sarprasContainer">
                <div class="sarprasitb">Sarpras ITB</div>
                <div style="font-size: 13px">Layanan Parkir Mahasiswa</div>
            </div>
      </div>
      <div class="halo">
          <div class="haloalex">
              Halo, Alexandra!
          </div>
          <div>
              NIM Anda: 18218033
          </div>
      </div>
      <div class="parkirNriwayat">
          <div>
            <v-btn color="#86b9ff" tile elevation=0 @click="parkirSekarang()">
                Parkir Sekarang
            </v-btn>
          </div>
          <div>
            <v-btn color="#86b9ff" tile elevation=0 @click="riwayatParkir()">
                Riwayat Parkir
            </v-btn>
          </div>
      </div>
      <div class="halo">
          <div class=haloalex>
              Saldo Anda
          </div>
          <div>
              {{ saldo | toRp }}
          </div>
      </div>
      <div class="parkirNriwayat">
          <div>
            <v-btn color="#86b9ff" tile elevation=0 @click="() => {this.topUpClicked = !this.topUpClicked}">
                Top Up Saldo
            </v-btn>
          </div>
      </div>
    <div v-if="riwayat !== null" class="halo" @click="riwayat = null">
        <div class="haloalex">Riwayat</div>
        <div style="color: transparent">n</div>
        <div v-for="row in riwayat" :key="row.waktu">
            <div>{{ row.waktu.split(" ").slice(0,5).join(' ') }}</div>
            <div>{{ [row.status, row.parkiran].join(" ") }}</div>
            <div style="color: transparent">n</div>
        </div>
    </div>
    <div v-if="topUpClicked === true" class="topUpPop">
        <div class="topUpField">
            <v-text-field label='Nominal' required v-model="nominalTopUp" outlined dense :rules="[checkNumber]"></v-text-field>
        </div>
        <div class="toUpField">
            <v-btn outlined :disabled="!isNumber" @click="topUp()">Top Up</v-btn>
        </div>
    </div>
  </v-app>
</template>

<script>
// import axios from 'axios';

export default {
    data: () => ({
        saldo: 0,
        riwayat: null,
        topUpClicked: false,
        nominalTopUp: 0,
        isNumber: false,
        pattern: /^\d*[1-9]\d*$/,
        checkNumber: value => {
            const pattern = /^\d*[1-9]\d*$/;
            if (!pattern.test(value)) {
                return 'Not a number'
            }
        }
    }),
    methods: {
        async parkirSekarang() {
            await this.$axios.post('https://blooming-atoll-42885.herokuapp.com/log', {
                nim: 18218033,
                namamahasiswa: "Alexandra Angeline",
                status: "masuk",
                parkiran: "sr"
            })
            alert('Kamu berhasil parkir');
        },
        async riwayatParkir() {
            await this.$axios.get('https://blooming-atoll-42885.herokuapp.com/log/18218033')
                .then((res) => {
                    this.riwayat = res.data.data
                })
        },
        async topUp() {
            await this.$axios.post('https://blooming-atoll-42885.herokuapp.com/saldo/18218033', {
                topup: this.nominalTopUp
            }).then(async () => {
                this.nominalTopUp = 0;
                this.isNumber = false;
                this.topUpClicked = false;
                await this.$axios.get('https://blooming-atoll-42885.herokuapp.com/saldo/18218033')
                    .then((res) => {
                        this.saldo = res.data.data.saldo;
                    })
                    .catch(err => {
                        console.log(err)
                })
                alert('Saldo berhasil ditambahkan')
            })
        },
    },
    watch: {
        nominalTopUp: function(newNumber) {
            const pattern = /^\d*[1-9]\d*$/;
            this.isNumber = pattern.test(newNumber)
        }
    },
    created: async function() {
        await this.$axios.get('https://blooming-atoll-42885.herokuapp.com/saldo/18218033')
            .then((res) => {
                this.saldo = res.data.data.saldo;
            })
            .catch(err => {
                console.log(err)
            })
    },
    filters: {
        toRp: (value) => {
            value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            value = 'Rp' + value;
            return value
        }
    }
}
</script>

<style scoped>
.mainContainer {
    width: 330px;
    border: 1px solid black;
    margin: auto;
}
.header {
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 30px 40px;
}
.logoContainer {
    width: 30%;
}
.sarprasContainer {
    /* background-color: red; */
    width: 70%;
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
.parkirNriwayat {
    text-align: center;
}
.parkirNriwayat > div {
    margin: 25px;
}
.v-btn {
    text-transform: capitalize;
}
.topUpField {
    width: 50%;
    padding-right: 30px;
}
.topUpPop {
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* background-color: red; */
}
</style>