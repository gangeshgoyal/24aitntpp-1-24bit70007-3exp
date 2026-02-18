import * as CardModel from "../models/card.model.js";

export const getPaginatedCards = (page = 1, limit = 10) => {
  const cards = CardModel.getAllCards();
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {
    totalCards,
    totalPages,
    currentPage: page,
    limit,
    cards: cards.slice(startIndex, endIndex),
  };

  if (endIndex < totalCards) {
    result.next = { page: page + 1, limit };
  }

  if (startIndex > 0) {
    result.previous = { page: page - 1, limit };
  }

  return result;
};

export const getCard = (id) => CardModel.getCardById(id);

export const createNewCard = (data) => {
  const newCard = { id: Date.now(), ...data };
  return CardModel.createCard(newCard);
};

export const updateExistingCard = (id, data) =>
  CardModel.updateCard(id, data);

export const removeCard = (id) =>
  CardModel.deleteCard(id);
