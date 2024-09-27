import * as cdk from "aws-cdk-lib";

import type { Construct } from "constructs";
import { QueueConstruct } from "./constructs/my-queue-construct";

export class DuplicateNameSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new QueueConstruct(this, "MyQueue");
  }
}
