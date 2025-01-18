import { Router } from "express";
import getRandomElementFromArray from "./utils.js";
import { quotes } from "./data.js";

const quotesRouter = Router();



quotesRouter.get("/random", (req, res, next) => {
    const randomQuote = getRandomElementFromArray(quotes);
    res.json({ quotes: randomQuote });
});

quotesRouter.get("/", (req, res, next) => {
    const person = req.query.person;
    if (person) {
        const quoteByPerson = quotes.filter((quote) => {
            return quote.person === person
        })
        res.json({ quotes: quoteByPerson });
    }
    res.json({ quotes: quotes });
});

quotesRouter.post("/", (req, res, next) => {
    const { quote, person } = req.body;
    if (!quote || !person) {
        res.status(400).json({ error: "Both person and quote are required" });
    }
    const newQuote = {
        quote: quote,
        person: person
    }
    quotes.push(newQuote);
    res.status(201).json({ quote: newQuote });
});

export default quotesRouter;