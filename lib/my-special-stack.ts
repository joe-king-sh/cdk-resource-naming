import * as cdk from "aws-cdk-lib";

import type { Construct } from "constructs";
import { S3Construct } from "./constructs/s3-construct";

export class MySpecialServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new S3Construct(this, `${id}-S3Construct`);
  }
}
