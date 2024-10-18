<template>
  <div class="main">
    <div class="container">
      <img src="@/assets/head-logo.png" alt="" />
      <div class="container-authorization">
        <h2>Авторизация</h2>
        <div class="inputs">
          <div class="row">
            <input type="text" placeholder="Ваше имя*">
            <input type="text" placeholder="Ваш возраст*">
          </div>
          <div class="row">
            <input type="text" placeholder="Город проживания">
            <input type="text" placeholder="Ваш пол*">
          </div>
          <div class="row">
            <input type="text" class="single" placeholder="Ваша почта">
          </div>
        </div>
        <div class="politic">
          <div class="politic-button"></div>
          <input type="checkbox" id="politic" name="politic" value="" hidden>
          <label for="politic">Я соглашаюсь с <a href="">политикой обработки персональных данных</a></label>
        </div>
        <div class="button-start">Начать</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
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
    letter-spacing: -0.02em;
  }

  input[type="text"].single {
    width: 100%;
    max-width: 100%;
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

</style>