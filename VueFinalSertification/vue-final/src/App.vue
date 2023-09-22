<template>
  <div id="app">
    <header>
      <div class="header center">
        <nav class="logo">
          <img src="@/assets/logo.png" alt="logo" class="logo__img" />
          <a href="#" class="logo__text">Interno</a>
        </nav>
        <nav class="menu">
          <router-link to="/home">Home</router-link>
          <router-link to="/project">Project</router-link>
          <router-link to="/blog">Blog</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="footer center">
      <div class="footer__main">
        <nav class="logo">
          <img src="@/assets/logo.svg" alt="logo" class="logo__img" />
          <a href="#" class="logo__text">Interno</a>
        </nav>
        <p class="footer__main_text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__main_links">
          <a href="#" class="footer__main_link">
            <img src="@/assets/twitter.svg" alt="tw" />
          </a>
          <a href="#" class="footer__main_link">
            <img src="@/assets/in.svg" alt="in" />
          </a>
        </div>
      </div>
      <div class="footer__pages">
        <p class="footer__pages_title">Pages</p>
        <a href="#" class="footer__pages_subtitle"> Home </a>
        <a href="#" class="footer__pages_subtitle"> Project </a>
        <a href="#" class="footer__pages_subtitle"> Blog </a>
      </div>
      <div class="footer__empty"></div>
      <div class="footer__contact">
        <p class="footer__contact_title">Contact</p>
        <p class="footer__contact_address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="footer__contact_mail">contact@interno.com</p>
        <p class="footer__contact_phone">(123) 456 - 7890</p>
      </div>
    </footer>

  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 53px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  &__text {
    color: #292f36;
    font-family: 'DM Serif Display', serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 50px */
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  width: 243px;
  color: #292f36;
  text-align: center;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 25px */
}

.footer {
  display: flex;
  flex-direction: row;
  gap: 100px;
  margin-bottom: 134px;

  &__main {
    &_text {
      width: 400px;
      color: #4d5053;
      font-family: 'Jost', sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      /* 33px */
      letter-spacing: 0.22px;
      margin-top: 18px;
      margin-bottom: 32px;
    }

    &_links {
      display: flex;
      width: 224px;
      align-items: center;
      gap: 54px;
    }
  }

  &__pages {
    display: flex;
    width: 124px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    &_title {
      margin-bottom: 10px;
      color: #292f36;
      font-family: 'DM Serif Display', serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }

    &_subtitle {
      color: #4d5053;
      font-family: 'Jost', sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 300%;
      /* 66px */
      letter-spacing: 0.22px;
    }
  }

  &__empty {
    width: 120px;
    height: 66px;
  }

  &__contact {
    display: flex;
    width: 260px;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    flex-shrink: 0;

    &_title {
      color: #292f36;
      font-family: 'DM Serif Display', serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      /* 31.25px */
    }

    &_address {
      width: 280px;
      color: #4d5053;
      font-family: 'Jost', sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.22px;
    }

    &_phone,
    &_mail {
      color: #4d5053;
      font-family: 'Jost', sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 300%;
      letter-spacing: 0.22px;
    }
  }
}
</style>
