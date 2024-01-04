<template>
  <footer class="footer">
    <div class="central-text">
      <p>
        This design and application was developed for the technical test of the
        company Faster br for a junior frontend position.
      </p>
    </div>
    <div class="footer-content">
      <div class="social-icons">
        <a
          href="mailto:samaratrindaderibeiro@hotmail.com?subject=&body="
          title="Email"
          ><EmailIcon
        /></a>
        <a href="https://github.com/sammytrindade" title="Github"
          ><GithubIcon
        /></a>
        <a href="https://www.linkedin.com/in/samaratrindade/" title="LinkedIn"
          ><LinkedinIcon
        /></a>
        <a href="https://twitter.com/SammyTrindade" title="Twitter"
          ><TwitterIcon
        /></a>
        <a
          href="https://api.whatsapp.com/send?phone=5521993601558"
          title="WhatsApp"
          ><WhatsappIcon
        /></a>
      </div>
      <div class="designer-text">
        <p>Designed by Samara Trindade</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import EmailIcon from "~/components/icons/email.vue";
import GithubIcon from "~/components/icons/github.vue";
import LinkedinIcon from "~/components/icons/linkedin.vue";
import TwitterIcon from "~/components/icons/twitter.vue";
import WhatsappIcon from "~/components/icons/whatsapp.vue";
</script>

<style scoped>
.footer {
  background-color: #F68D2E;
  color: #22224F;
  text-align: center;
  padding: 20px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.central-text {
  font-family: "Audiowide", cursive;
  flex-grow: 1;
}

.social-icons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.designer-text {
  margin-top: 10px;
}
</style>
