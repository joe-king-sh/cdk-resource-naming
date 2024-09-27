import * as cdk from "aws-cdk-lib";

import type { Construct } from "constructs";
import { QueuesConstruct } from "./constructs/queues-construct";

export class DefaultResourceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new QueuesConstruct(this, "QueuesConstruct");
  }
}
