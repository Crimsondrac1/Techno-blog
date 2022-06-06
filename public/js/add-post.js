async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const description = document.querySelector('input[name="description"]').value;
  const url = document.querySelector('input[name="url"]').value.trim();

  const response = await fetch(`/api/posts`, {
      method: 'post',
      body: JSON.stringify({
          title,
          description,
          url,
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
