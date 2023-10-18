const STRINGREGEX = /^(?=.*[A-Za-z])[A-Za-z.,=_-]+$/;
const NUMBERREGEX = /^(?=.*[0-9])[0-9.,+=_-]+$/;

export const validation = (data) => {
  const errors = {};
  if (data.name.trim() === "") {
    errors.nameValid = "enter your name";
  } else if (!STRINGREGEX.test(data.name)) {
    errors.nameValid = "it is not valid";
  }
  if (data.description.trim() === "") {
    errors.descriptionValid = "enter your description";
  } else if (!STRINGREGEX.test(data.description)) {
    errors.descriptionValid = "it is not valid";
  }
  if (data.category.trim() === "") {
    errors.categoryValid = "enter your category";
  } else if (!STRINGREGEX.test(data.category)) {
    errors.categoryValid = "it is not valid";
  }
  if (data.quantity === "") {
    errors.quantityValid = "enter your quantity";
  } else if (!NUMBERREGEX.test(data.quantity)) {
    errors.quantityValid = "it is not valid";
  }
  if (data.price === "") {
    errors.priceValid = "enter your price";
  } else if (!NUMBERREGEX.test(data.price)) {
    errors.priceValid = "it is not valid";
  }

  return errors;
};
