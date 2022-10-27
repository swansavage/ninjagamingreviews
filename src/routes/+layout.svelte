<script>
  import Title from "$lib/Title.svelte";
  import "../styles/global.css";
</script>

<header>
  <Title title="Ninja Gaming Guides" />
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/guides">Guides</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>&copy; 2022 Ninja Gaming</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  }

  main {
    max-width: 960px;
    margin: 20px auto;
    padding: 0 20px;
  }

  footer {
    text-align: center;
  }
</style>
