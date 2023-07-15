function getTextInsideFirstLiTag() {
    var liElements = document.getElementsByTagName("li");
    if (liElements.length > 0) {
      return liElements[0].textContent;
    } 
}
  function getTextsInsideLiTags() {
    var liElements = document.getElementsByTagName("li");
    var texts = [];
    for (var i = 0; i < liElements.length; i++) {
      texts.push(liElements[i].textContent);
    }
  

    return texts;
  }
  function getClassValuesInsideListItems() {
    var listItems = document.getElementsByClassName("list-item");
    var classValues = [];
    for (var i = 0; i < listItems.length; i++) {
      var classValue = listItems[i].getAttribute("class");
      classValues.push(classValue);
    }
  
    return classValues;
  }
  var inputField = document.getElementById("secret-login");
if (inputField) {
  inputField.id = "You were hacked";
}











 function getBrokenDataTestIdAttributes() {
    const listItems = document.querySelectorAll('.list-item');
    const brokenItems = Array.from(listItems).filter(item => !item.classList.contains(item.textContent));
    const dataTestIds = brokenItems.map(item => item.getAttribute('data-test-id'));
    return dataTestIds;
  };
  
console.log(getBrokenDataTestIdAttributes( ));