<script>
    document.onerror = function(message, url, line, col, error) {
        alert(`${message}\n В ${line}:${col} на ${url}`);
  };

    function readData() {
        badFunc(); // Ой, что-то пошло не так!
  }

    readData();
</script>