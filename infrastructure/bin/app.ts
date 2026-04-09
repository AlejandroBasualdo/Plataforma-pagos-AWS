#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NetworkingStack } from '../lib/networking-stack';

const app = new cdk.App();

new NetworkingStack(app, 'PlataformaPagos-Networking', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ?? 'us-east-1',
  },
  description: 'VPC, subnets y endpoints de red para la plataforma de pagos',
});

cdk.Tags.of(app).add('Proyecto', 'plataforma-pagos-aws');
cdk.Tags.of(app).add('Ambiente', 'dev');
