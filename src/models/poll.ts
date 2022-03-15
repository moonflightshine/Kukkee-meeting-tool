import mongoose, { model, Model, Document, Schema } from "mongoose";

export interface Choice {
  start: number;
  end: number;
  ifNeedBe?: boolean;
}

export interface ChoiceFromDB {
  _id: string;
  start: number;
  end: number;
  ifNeedBe?: boolean;
}

export interface Vote {
  name: string;
  choices: Choice[];
}

export interface VoteFromDB {
  _id: string;
  name: string;
  choices: ChoiceFromDB[];
}

export interface Poll {
  title: string;
  description?: string;
  open?: boolean;
  secret: string;
  location?: string;
  choices: Choice[];
  finalChoice?: Choice;
  votes?: Vote[];
}

export interface PollFromDB {
  _id: string;
  title: string;
  description?: string;
  open?: boolean;
  secret: string;
  location?: string;
  choices: ChoiceFromDB[];
  finalChoice?: ChoiceFromDB;
  votes?: VoteFromDB[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PollDoc extends Document {
  title: string;
  description?: string;
  open?: boolean;
  secret: string;
  location?: string;
  choices: Choice[];
  finalChoice?: Choice;
  votes?: Vote[];
}

const PollSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    open: { type: Boolean, default: true },
    secret: { type: String, required: true },
    location: { type: String },
    choices: {
      type: [{ start: Number, end: Number }],
      required: true,
    },
    finalChoice: { type: { start: Number, end: Number } },
    votes: [
      {
        name: String,
        choices: [{ start: Number, end: Number, ifNeedBe: Boolean }],
      },
    ],
  },
  { timestamps: true }
);

const KukkeePoll: Model<PollDoc> =
  mongoose.models.Poll || model("Poll", PollSchema);

export interface HttpResponse {
  data: any;
  statusCode: number;
}

export default KukkeePoll;
