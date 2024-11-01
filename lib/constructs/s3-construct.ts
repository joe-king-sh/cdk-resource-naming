import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { RemovalPolicy } from "aws-cdk-lib";

export class S3Construct extends Construct {
  public readonly bucket1: s3.Bucket;
  public readonly bucket2: s3.Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.bucket1 = new s3.Bucket(this, `${id}-Bucket1`, {
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    this.bucket2 = new s3.Bucket(this, `${id}-Bucket2`, {
      encryption: s3.BucketEncryption.KMS_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}
