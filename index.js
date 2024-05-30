  const meals = {
      warm: ["Gegrilde zalm", "Stoofpot van rundvlees", "Lasagne, Kippensoep", "Gehaktballen", "Risotto", "Geroosterde groenten", "Pad Thai", "Chili con carne", "Gevulde paprika's"],
      koud: ["Caesar Salade", "Salade Niçoise", "Gazpacho", "Sushi", "Caprese salade", "Tonijnsalade", "Huzarensalade", "Quinoasalade", "Komkommersoep", "Carpaccio", "Fruit salade"]
    };

    document.getElementById('generate-btn').addEventListener('click', () => {
      const temperature = document.querySelector('input[name="temperature"]:checked').value;
      const randomMeal = getRandomMeal(temperature);
      displayResult(randomMeal);
    });

    function getRandomMeal(temperature) {
      const mealsForTemperature = meals[temperature];
      const randomIndex = Math.floor(Math.random() * mealsForTemperature.length);
      return mealsForTemperature[randomIndex];
    }

    function displayResult(meal) {
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = `Aanbevolen maaltijd: ${meal} (${document.querySelector('input[name="temperature"]:checked').value})`;
    }
