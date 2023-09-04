import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation"

export interface IOpenaiSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    code: string
  }
}