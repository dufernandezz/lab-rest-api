const { Router } = require("express");
const CandidateSchema = require("./models/candidate");

const routes = Router();

routes.get("/candidates", async (req, res) => {
  try {
    const candidateList = await CandidateSchema.find({ isDeleted: false });
    return res.json(candidateList);
  } catch {
    return res.status(400).send({ Message: "Usuário não encontrado" });
  }
});

routes.delete("/candidates/:_id", async (req, res) => {
  try {
    const candidate = await CandidateSchema.findByIdAndUpdate(req.params._id, {
      isDeleted: true,
    });
    if (!candidate) {
      return res.status(400).send({ Message: "Usuário não encontrado" });
    }
    return res.json({ message: "Candidato deletado" });
  } catch {
    return res.status(400).send({ Message: "Usuário não encontrado" });
  }
});

routes.put("/candidates/:_id", async (req, res) => {
  try {
    const candidate = await CandidateSchema.findByIdAndUpdate(
      req.params._id,
      req.body
    );
    if (!candidate) {
      return res.status(400).send({ Message: "Usuário não encontrado" });
    }
    const candidateUpdated = await CandidateSchema.findById(req.params._id);
    return res.json(candidateUpdated);
  } catch {
    return res.status(400).send({ Message: "Usuário não encontrado" });
  }
});

routes.post("/candidates", async (req, res) => {
  const CreateCandidate = new CandidateSchema(req.body);
  await CreateCandidate.save();
  return res.json(CreateCandidate);
});

module.exports = routes;
