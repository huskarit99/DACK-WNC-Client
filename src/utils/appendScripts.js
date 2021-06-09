export const appendScript = (scriptToAppend) => {
  const script = document.createElement('script')
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  }
}