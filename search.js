let form = document.querySelector("form");

form.addEventListener("submit", function(searchFun)
{
    searchFun.preventDefault();

    var search = form.querySelector("input[type=search]");

    search.value = search.value;

    form.submit();
});