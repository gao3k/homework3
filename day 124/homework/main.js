<DOCTYPE html>
<script>
  const queue = [];

  let isProcessing = false;

  function enqueueMessage() {
    const msg = document.getElementById("message").value;
    const delay = parseInt(document.getElementById("delay").value);

    queue.push({ msg, delay });
    processQueue();
  }

  async function processQueue() {
    if (isProcessing) return;
    isProcessing = true;

    while (queue.length > 0) {
      const { msg, delay } = queue.shift();
      await new Promise(resolve => setTimeout(resolve, delay));
      const output = document.createElement("p");
      output.textContent = msg;
      document.getElementById("output").appendChild(output);
    }

    isProcessing = false;
   }
</script>
<!DOCTYPE html>