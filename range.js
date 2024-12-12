
    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const range = document.getElementById('range');

    function updateRange() {
      const min = parseInt(rangeMin.value);
      const max = parseInt(rangeMax.value);

      if (min > max - 1) {
        rangeMin.value = max - 1;
      }
      if (max < min + 1) {
        rangeMax.value = min + 1;
      }

      const percentMin = (rangeMin.value / rangeMin.max) * 100;
      const percentMax = (rangeMax.value / rangeMax.max) * 100;

      range.style.left = percentMin + '%';
      range.style.width = (percentMax - percentMin) + '%';
    }

    rangeMin.addEventListener('input', updateRange);
    rangeMax.addEventListener('input', updateRange);

    updateRange();
  