<template>
  <div class="main">
    <div class="container">
      <img src="@/assets/head-logo.png" alt="" />
      <div class="container-authorization">
        <h2>Авторизация</h2>
        <div class="inputs">
          <div class="row">
            <input type="text" placeholder="Ваше имя*" v-model="name">
            <input type="text" placeholder="Ваш возраст*" v-mask="digitsMask" v-model="age">
          </div>
          <div class="row">
            <input type="text" placeholder="Город проживания" v-model="city">
            <div class="list" ref="list" @mouseout="mouseOutSexList">
              <div class="list-button" @click="toggleSexList"></div>
              <input type="text" ref="sexInput" class="sex" placeholder="Ваш пол*" disabled="">
              <div class="drop-down-list" ref="dropDownList">
                <div class="item" @click="selectSex('Мужской')">Мужской</div>
                <div class="item" @click="selectSex('Женский')">Женский</div>
              </div>
            </div>
          </div>
          <div class="row">
            <input type="text" class="single" placeholder="Ваша почта" v-model="email">
          </div>
        </div>
        <div class="politic" @click="setPolitic">
          <div class="politic-button" ref="politicButton"></div>
          <label for="politic">Я соглашаюсь с <a href="">политикой обработки персональных данных</a></label>
        </div>
        <div class="button-start" @click="buttonStart">Начать</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      digitsMask: '###',
      email: '',
      politic: 0,
      sex: '',
      city: '',
      age: null,
      name: '',
    };
  },
  methods: {
    setPolitic(e) {
      // avoid double click
      if(!e.target.parentNode.classList.contains('politic')) {
        return 0
      }

      this.$refs.politicButton.classList.toggle('selected')

      if(this.$refs.politicButton.classList.contains('selected')) {
        this.politic = 1
      } else {
        this.politic = 0
      }
    },
    toggleSexList() {
      if(this.$refs.list.classList.contains('open')) {
        this.$refs.list.classList.toggle('open')

        setTimeout(()=> {
          this.$refs.dropDownList.style.display = 'none'
        }, 500)
      } else {
        this.$refs.dropDownList.style.display = 'block';

        setTimeout(()=> {
          this.$refs.list.classList.toggle('open')
        })
      }

      setTimeout(()=> {
        if(this.$refs.list.classList.contains('open')) {
          document.body.addEventListener('click', this.bodyClickToCloseSexList)
        }
      })
    },
    selectSex(sex) {
      this.$refs.sexInput.value = sex
      this.sex = sex
      this.closeSexList()
    },
    mouseOutSexList(e) {
      //check if it not inside list
      let isInsideList = this.checkIfClickInsideSexList(e.relatedTarget)
      if(isInsideList) {
        return 0
      }

      this.closeSexList()
    },
    bodyClickToCloseSexList(e) {
      let isInsideList = this.checkIfClickInsideSexList(e.target)

      if(!isInsideList) {
        this.closeSexList()
      }

      document.body.removeEventListener('click', this.bodyClickToCloseSexList)
    },
    closeSexList() {
      this.$refs.list.classList.remove('open')

      setTimeout(()=> {
        this.$refs.dropDownList.style.display = 'none';
      }, 500)
    },
    checkIfClickInsideSexList(relatedTarget) {
      let isInsideList = 0
      let parents = []
      let parent = relatedTarget
      while(parent && parent.tagName !== 'BODY') {
        parents.push(parent)
        parent = parent.parentNode;
      }

      for(let parent of parents) {
        if(parent.classList && parent.classList.contains('list') || parents[0].classList.contains('inputs')) {
          isInsideList = 1
        }
      }

      return isInsideList
    },
    isEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    },
    buttonStart() {
      console.log(this.validate())
      // if(this.validate()) {
      //
      // }
    },
    validate() {
      let valid = 1;

      if(!this.isEmail(this.email)) {
        valid = 0;
        alert('Почта введена неправильно');
      }

      if(!this.politic) {
        valid = 0;
        alert('Подтвердите согласие с политикой');
      }

      if(!this.sex) {
        valid = 0;
        alert('Укажите ваш пол');
      }

      if(!this.age) {
        valid = 0;
        alert('Укажите ваш возраст');
      }

      if(!this.name) {
        valid = 0;
        alert('Укажите ваше имя');
      }

      return valid;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 60px);
    width: 100vw;
    padding: 30px 0 30px 0;
    background-image: linear-gradient(180deg, rgba(199, 124, 180, 0.4) 0%, rgba(243, 118, 116, 0.6) 50.22%, rgba(199, 124, 180, 0.4) 100%), url('~@/assets/background.jpg');
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container {
    width: 478px;
    height: calc(100% - 40px);
    padding: 20px 30px;
    max-height: 708px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 60px;
    backdrop-filter: blur(200px);
  }

  h2 {
    color: #fff;
    font-family: Arial,serif; /* Circe could'nt find */
    font-size: 45px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.06em;
    text-align: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .row {
    display: flex;
    gap: 5px;
    justify-content: center;
    height: 60px;
  }

  input[type="text"] {
    width: 100%;
    max-width: 174.5px;
    height: 100%;
    max-height: 60px;
    padding: 0 0 0 60px;
    gap: 0;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    font-family: Arial,serif; /* Circe could'nt find */
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
  }

  input[type="text"].single {
    width: 100%;
    max-width: 100%;
  }

  .list {
    position: relative;
  }

  input.sex {
    cursor: pointer;
  }

  .list::after {
    content: '';
    position: absolute;
    right: 22px;
    top: 22px;
    width: 10px;
    height: 10px;
    border-left: 2px solid rgba(255, 255, 255, 0.7);
    border-bottom: 2px solid rgba(255, 255, 255, 0.7);
    transform: rotate(-45deg);
    transition: all .5s ease;
  }

  .list.open::after {
    transform: rotate(135deg);
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
    opacity: 1; /* Firefox */
    font-family: Arial,serif; /* Circe could'nt find */
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  input:focus {
    caret-color: #fff;
    border-color: #fff;
    outline: #fff;
  }

  .politic {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  a,
  .politic,
  .politic label {
    color: rgba(255, 255, 255, 1);
    font-family: Arial,serif; /* Circe could'nt find */
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;
    text-align: left;
    cursor: pointer;
  }

  .politic-button {
    height: 20px;
    width: 20px;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: .5S ease all;
  }

  .politic-button.selected {
    background: #fff;
  }

  .button-start {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 1);
    color: rgba(44, 44, 44, 1);
    font-family: Arial,serif; /* Circe could'nt find */
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    cursor: pointer;
  }

  .drop-down-list {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 234.5px;
    margin-top: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(200px);
    color: #fff;
    font-family: Arial,serif; /* Circe could'nt find */
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    opacity: 0;
    transition: .5s all ease;
  }

  .list.open .drop-down-list {
    top: 61.5px;
    opacity: 1;
  }

  .drop-down-list .item {
    padding: 10px 0 10px 0;
    cursor: pointer;
    transition: .5s all ease;
  }

  .drop-down-list .item:hover {
    background: rgba(44, 62, 80, 0.15);
  }

  .list-button {
    position: absolute;
    width: 100%;
    max-width: 176.5px;
    height: 62px;
    padding: 0 0 0 60px;
    border-radius: 100px;
    cursor: pointer;
  }

</style>