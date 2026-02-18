let cards = [];

export const getAllCards = () => cards;

export const getCardById = (id) =>
  cards.find((card) => card.id === id);

export const createCard = (card) => {
  cards.push(card);
  return card;
};

export const updateCard = (id, updatedFields) => {
  const card = cards.find((c) => c.id === id);
  if (!card) return null;
  Object.assign(card, updatedFields);
  return card;
};

export const deleteCard = (id) => {
  const index = cards.findIndex((c) => c.id === id);
  if (index === -1) return null;
  return cards.splice(index, 1)[0];
};
