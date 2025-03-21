function open_image() {
    // Create a new image element
    const img = document.createElement('img');
    // Set the source of the image
    img.src = 'making a back groun image in tkinter python.png';
    // Optionally, set other attributes like alt, width, height, etc.
    img.alt = 'Description of the image';
    img.width = 300; // Example width
    img.height = 200; // Example height

    // Get the container where the image will be displayed
    const imageContainer = document.getElementById('imgs');
    // Clear any existing content in the container
    imageContainer.innerHTML = '';
    // Append the new image to the container
    imageContainer.appendChild(img);
}
