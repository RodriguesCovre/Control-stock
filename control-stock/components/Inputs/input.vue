<template>
    <input placeholder="Username" type="text" name="text" class="input">
</template>

<style>
.input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
  border-radius: 25px;
}

.input::placeholder {
  color: #555;
  transition: all 0.3s ease;
}

.input:focus::placeholder {
  color: #999;
}
</style>