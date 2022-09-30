<template>
  <div style="display: flex">
    <div class="container-left">
      <div>
        <div style="margin-top: 20px; padding-left: 20px; width: 70%">
          <p class="yellove">Quantity</p>
          <el-input
            :blur="calculatePrice()"
            placeholder="Qunatity"
            v-model="quantity"
          ></el-input>
        </div>
        <div style="display: flex; margin-top: 40px">
          <div
            :class="
              highLightCover === 'coverd'
                ? 'highlighted-class'
                : 'non-highlighted-class'
            "
          >
            <img
              src="@/assets/b2.svg"
              alt="img_text"
              width="100"
              height="100"
              @click="getPriceCover('coverd')"
            />
          </div>
          <div
            :class="
              highLightCover === 'self-covered'
                ? 'highlighted-class'
                : 'non-highlighted-class'
            "
          >
            <img
              src="@/assets/b1.png"
              alt="img_text"
              width="100"
              height="100"
              @click="getPriceCover('self-covered')"
            />
          </div>
          <div
            :class="
              highLightCover === 'flip'
                ? 'highlighted-class'
                : 'non-highlighted-class'
            "
          >
            <img
              src="@/assets/b3.svg"
              alt="img_text"
              width="100"
              height="100"
              @click="getPriceCover('flip')"
            />
          </div>
        </div>

        <div>
          <p class="yellove" style="margin-top: 20px; padding-left: 20px">Orientation</p>
          <div style="display: flex; padding-left: 20px">
            <div
              :class="
                highLight === 'horizontal'
                  ? 'highlighted-class'
                  : 'non-highlighted-class'
              "
            >
              <img
                id="horz"
                src="@/assets/horizontal.png"
                alt="img_text"
                width="100"
                height="100"
                value="horizontal"
                @click="getPrice('horizontal')"
              />
            </div>
            <div
              :class="
                highLight === 'vertical'
                  ? 'highlighted-class'
                  : 'non-highlighted-class'
              "
            >
              <img
                id="vert"
                src="@/assets/rotate.png"
                alt="img_text"
                width="100"
                height="100"
                value="vertical"
                @click="getPrice('vertical')"
              />
            </div>
          </div>
        </div>

        <div style="margin-top: 20px; padding-left: 20px; width: 70%">
          <p class="yellove">Pages</p>
          <div>
            <el-input
              :blur="calculatePrice()"
              placeholder="Please enter some number"
              v-model="pages"
            ></el-input>
          </div>
        </div>

        <div style="margin-top: 20px; padding-left: 20px; width: 70%">
          <p class="yellove">Material Type</p>
          <div>
            <el-select
              v-model="value"
              placeholder="Select"
              :blur="calculatePrice()"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="container-right">
      <!-- <SignUpForm /> -->

      <p class="yellove">Amount as per selctions</p>
      <p style="font-size: 30px">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 10,
      pages: 8,
      options: [
        {
          value: "mc-ss",
          label: "Matt Coated - Symbol Satin",
        },
        {
          value: "ham-tin",
          label: "Hammered - Tintoretto",
        },
        {
          value: "av-vw",
          label: "Avoriata - Vellum White",
        },
      ],
      value: "mc-ss",
      price: 0,

      // DataSection
      datasetObj: {
        "mc-ss": 20,
        "ham-tin": 23,
        "av-vw": 18,
        horizontal: 90,
        vertical: 79,
        coverd: 89,
        "self-covered": 79,
        flip: 99,
      },
      valueForCover: "coverd",
      valueForAlign: "horizontal",

      // Value for styles
      highLightCover: "coverd",
      highLight: "horizontal",
    };
  },
  methods: {
    calculatePrice() {
      let internal =
        parseInt(this.datasetObj[this.value]) * parseInt(this.pages);
      let ext =
        parseInt(this.datasetObj[this.valueForCover]) +
        parseInt(this.datasetObj[this.valueForAlign]);
      let temp = (internal + ext) * this.quantity;
      this.price = temp;
    },
    getPriceCover(x) {
      // var val = document.getElementById(x).value;
      let internal =
        parseInt(this.datasetObj[this.value]) * parseInt(this.pages);
      let ext =
        parseInt(this.datasetObj[x]) +
        parseInt(this.datasetObj[this.valueForAlign]);
      let temp = (internal + ext) * this.quantity;
      this.valueForCover = x;
      this.highLightCover = x;
      this.price = temp;
    },
    getPrice(x) {
      // var val = document.getElementById(x).value;
      let internal =
        parseInt(this.datasetObj[this.value]) * parseInt(this.pages);
      let ext =
        parseInt(this.datasetObj[this.valueForCover]) +
        parseInt(this.datasetObj[x]);
      let temp = (internal + ext) * this.quantity;
      this.valueForAlign = x;
      this.highLight = x;
      this.price = temp;
    },
  },
  created() {
    let internal = parseInt(this.datasetObj[this.value]) * parseInt(this.pages);
    let ext =
      parseInt(this.datasetObj[this.valueForCover]) +
      parseInt(this.datasetObj[this.valueForAlign]);
    let temp = (internal + ext) * this.quantity;
    this.price = temp;
  },
};
</script>

<style scoped>
.container-left {
  display: block;
  height: 100vh;
  width: 100%;
  /* background: rgb(249, 252, 255); */
}

.container-right {
  display: block;
  height: 100vh;
  width: 100%;
  /* background: rgb(249, 252, 255); */
}

.techart-quote {
  font-size: 10px;
  margin-top: 128px;
  margin-left: 136px;
}

.conf-box {
  width: 600px;
  height: 400px;
  border: 1px solid rgb(75, 74, 74);
  margin-left: 60px;
}

.non-highlighted-class {
  display: flex-inline;
  padding: 10px;
  margin-right: 100px;
  cursor: pointer;
}
.highlighted-class {
  display: flex-inline;
  padding: 10px;
  margin-right: 100px;
  background-color: #f6f6f6;
  border: 2px solid #f6f6f6;
  border-radius: 8px;
  cursor: pointer;
}

.yellove {
  background-color: blue;
  padding: 10px;
  width: 160px;
  border-radius: 4px;
}
</style>
