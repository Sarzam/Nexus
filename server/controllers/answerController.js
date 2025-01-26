const Question = require('../models/QuestionModel');

const createAnswer = async (req, res) => {
  try {
    const { content } = req.body;
    const questionId = req.params.questionId;
    const author = req.user.id;

    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const answer = {
      content,
      author,
      createdAt: new Date()
    };

    question.answers.push(answer);
    await question.save();

    // Populate the author details of the new answer
    const populatedQuestion = await Question.findById(questionId)
      .populate('answers.author', 'fullName linkedInProfile');

    const newAnswer = populatedQuestion.answers[populatedQuestion.answers.length - 1];

    res.status(201).json(newAnswer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAnswer = async (req, res) => {
  try {
    const { questionId, answerId } = req.params;
    const userId = req.user.id;

    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const answer = question.answers.id(answerId);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    if (answer.author.toString() !== userId) {
      return res.status(403).json({ error: 'Not authorized to delete this answer' });
    }

    answer.remove();
    await question.save();

    res.status(200).json({ message: 'Answer deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createAnswer, deleteAnswer };
