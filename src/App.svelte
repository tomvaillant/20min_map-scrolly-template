<script>
  import Map from './Map.svelte';
</script>

<main>
  <Map />
  <!-- <MapVideo /> -->
  <div class="scrollytelling">
    <section id="position-1" class="sizer active">
      <div class="textbox">Beim Schlössli Schönegg in Luzern drohen 5'500 Kubikmeter Fels, ohne Vorwarnung jederzeit abzustürzen. Am Rande des Gefährdungsgebiets befinden sich vier Häuser.</div>
    </section>
    <section id="position-2" class="sizer" >
      <div class="textbox">Die Anwohnenden dürfen die bergseitigen Räume wie Schlaf- oder Wohnzimmer bis auf Weiteres nicht mehr nutzen. Ein möglicher Felssturz birgt im Ereignisfall ein hohes Schadenpotenzial.</div>
    </section>
    <section class="sizer">
      <div class="textbox">Im Sturzraum befinden sich auch die Zufahrtsgleise zum Bahnhof Luzern, was zu einem längeren Unterbruch der Bahnhofszufahrt führen würde. Seit Mitte August wird die Felspartie laufend überwacht.</div>
    </section>
  </div>
</main>

<style>
  :global(html, body) {
    margin: 0 !important;
    padding: 0 !important;
  }
  main {
    height: 100vh;
    position: relative;
  }

  .scrollytelling {
    display: grid;
    grid-template-rows: repeat(8, 12vh);
    grid-template-columns: 40vw;
    justify-content: center;
    gap: 90vh;
    position: sticky;
    top: 20vh; /* Adjust as needed to control when the scrollytelling starts */
    left: 0;
    right: 0;
    padding-top: 50vh;
    box-sizing: border-box;
  }

  .sizer {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-bottom: 50vh; */
  }

  .textbox {
    text-align: left;
    padding: 1.3rem;
    font-size: 1rem;
    font-family: 'BatonTurbo', sans-serif;
    font-weight: normal;
    color: white;
    background-color: #07184D;
    border-radius: 1px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .textbox span {
    background-color: blueviolet;
    font-family: 'BatonTurbo', sans-serif;
    font-weight: bold;
    padding: 2px 5px;
    display: inline-block;
    margin-top: 4px;
  }
  @media (max-width: 768px) { /* Adjust 768px based on your definition of mobile devices */
  .scrollytelling {
    grid-template-columns: 80vw;
  }
}
</style>
