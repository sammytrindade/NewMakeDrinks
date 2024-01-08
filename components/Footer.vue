<!-- Rodapé da página
  elemento pai: fotter (Estilização do backgroud-color e flex box)
  elemento filho: central-test (Container de estilização que contém a tag HTML "p" dentro de footer)
  elemento filho: footer-content (Container que contém os icons, usado para posicioná-los ao mesmo tempo)
  elemento neto: social-icons (Filho de footer-content, para estilização dos icons)
  elemento filho: designer-text (Container usado para posicionar a tag HTML "p")
-->

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
          target="_blank"
          ><img src="../assets/Email.png" alt="Email image" />
        </a>
        <a
          href="https://github.com/sammytrindade"
          title="Github"
          target="_blank"
          ><img src="../assets/Github.png" alt="Logo github" />
        </a>
        <a
          href="https://www.linkedin.com/in/samaratrindade/"
          title="LinkedIn"
          target="_blank"
          ><img src="../assets/Linkedin.png" alt="Logo linkedin" />
        </a>

        <a
          href="https://twitter.com/SammyTrindade"
          title="Twitter"
          target="_blank"
          ><img src="../assets/Twitter.png" alt="Logo twitter" />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5521993601558"
          title="WhatsApp"
          target="_blank"
          ><img src="../assets/Whatsapp.png" alt="Phone Image"
        /></a>
      </div>
      <div class="designer-text">
        <p>Designed by Samara Trindade</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// import EmailIcon from "~/components/icons/email.vue";
// import GithubIcon from "~/components/icons/github.vue";
// import LinkedinIcon from "~/components/icons/linkedin.vue";
// import TwitterIcon from "~/components/icons/twitter.vue";
// import WhatsappIcon from "~/components/icons/whatsapp.vue";
</script>

<style scoped>
.footer {
  background-color: #f68d2e;
  color: #22224f;
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
  flex-wrap: wrap;
  width: 100%;
  text-align: start;
}

.central-text p {
  font-size: 47px;
  padding: 0 3em;
}

.social-icons {
  margin-top: 10px;
  margin-left: 10em;
  display: flex;
  gap: 10px;
}
.social-icons img {
  width: 43px;
}

.designer-text {
  margin-top: 10px;
}
.designer-text p {
  font-size: 32px;
}

@media (max-width: 1440px) {
  .central-text p {
    font-size: 33px;
    padding: 0 2em;
  }

  .social-icons {
    margin-top: 10px;
    margin-left: 6em;
    display: flex;
    gap: 10px;
  }

  .designer-text p {
    font-size: 22px;
  }
}

@media (max-width: 1024px) {
  .central-text p {
    font-size: 23px;
    padding: 0 2em;
  }

  .social-icons {
    margin-top: 10px;
    margin-left: 3em;
    display: flex;
    gap: 10px;
  }
  .designer-text p {
    font-size: 19px;
  }
  .social-icons img {
    width: 33px;
  }
}

@media (max-width: 768px) {
  .central-text p {
    font-size: 16px;
    padding: 0 2em;
  }

  .social-icons {
    margin-top: 10px;
    margin-left: 2em;
    display: flex;
    gap: 10px;
  }

  .designer-text p {
    font-size: 14px;
  }

  .social-icons img {
    width: 23px;
  }
}
@media (max-width: 768px) {
  .central-text p {
    font-size: 12px;
    padding: 0 2em;
  }

  .social-icons {
    margin-top: 10px;
    margin-left: 1.5em;
    display: flex;
    gap: 10px;
  }

  .designer-text p {
    font-size: 10px;
  }

  .social-icons img {
    width: 18px;
  }
}
</style>
