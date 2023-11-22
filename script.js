function search() {
    var searchInput = document.getElementById("searchInput").value;
    var resultDiv = document.getElementById("result");

    // You can replace this with an API call to a real dictionary service
    // For simplicity, we'll just show a static response here
    var fakeApiResponse = "Definition of " + searchInput + ": This is a sample definition.";

    resultDiv.innerHTML = fakeApiResponse;
}
