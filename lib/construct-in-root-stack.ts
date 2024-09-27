import * as cdk from "aws-cdk-lib";
import * as sqs from "aws-cdk-lib/aws-sqs";

import type { Construct } from "constructs";

export class ConstructInRootStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Stack直下
    new sqs.CfnQueue(this, "My-Queue");

    new sqs.Queue(this, "MyQueue", {
      queueName: "my-queue",
    });
  }
}
