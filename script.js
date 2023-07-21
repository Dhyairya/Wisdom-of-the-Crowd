function showThankYouMessage() {
    event.preventDefault();
    const personName = document.getElementById('personName').value;
    const displayPersonName = document.getElementById('displayPersonName');
    displayPersonName.textContent = personName;
    document.getElementById('thankYouMessage').style.display = 'block';
    return false;
}
