function volume_sphere() {
  // Get radius value from the input field
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);

  // Validate input: must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    document.getElementById('volume').value = 'NaN';
    return;
  }

  // Calculate volume: V = (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the result rounded to 4 decimal places
  document.getElementById('volume').value = volume.toFixed(4);
}
