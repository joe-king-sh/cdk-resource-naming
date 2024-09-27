import * as sqs from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export class QueuesConstruct extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new sqs.CfnQueue(this, "MyQueue");
    new sqs.CfnQueue(this, "Default");
    new sqs.CfnQueue(this, "Resource");
  }
}
