import * as CardService from "../services/card.service.js";

export const getCards = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const data = CardService.getPaginatedCards(page, limit);
  res.json(data);
};

export const getCardById = (req, res) => {
  const id = parseInt(req.params.id);
  const card = CardService.getCard(id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(card);
};

export const createCard = (req, res) => {
  const { suit, value, collection } = req.body;

  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCard = CardService.createNewCard({ suit, value, collection });
  res.status(201).json(newCard);
};

export const updateCard = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCard = CardService.updateExistingCard(id, req.body);

  if (!updatedCard) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(updatedCard);
};

export const deleteCard = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedCard = CardService.removeCard(id);

  if (!deletedCard) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json({ message: "Card deleted successfully" });
};
