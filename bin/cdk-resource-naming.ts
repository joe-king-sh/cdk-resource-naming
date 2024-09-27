#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ConstructInRootStack } from "../lib/construct-in-root-stack";
import { DuplicateNameSampleStack } from "../lib/duplicate-name-stack";
import { DefaultResourceStack } from "../lib/default-resource-stack";

const app = new cdk.App();
new ConstructInRootStack(app, "ConstructInRootStack", {});
new DuplicateNameSampleStack(app, "DuplicateNameSampleStack", {});
new DefaultResourceStack(app, "SampleStack", {});
