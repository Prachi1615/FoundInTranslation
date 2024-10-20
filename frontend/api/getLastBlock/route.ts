import { http, createPublicClient } from 'viem';
import { polygonAmoy } from 'viem/chains';
import superjson from 'superjson';

const client = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
});

export const dynamic = 'force-dynamic';
export async function GET() {
  const [blockNumber, block] = await Promise.all([
    client.getBlockNumber(),
    client.getBlock()
  ]);
  console.log(`Block Number: ${ superjson.serialize(blockNumber).json }`);
  return Response.json({ blockNumber: superjson.serialize(blockNumber).json, block: superjson.serialize(block).json });
}
