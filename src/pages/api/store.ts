import type { NextApiRequest, NextApiResponse } from "next";
import { StoreApiResponse, StoreType } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { count } from "console";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiResponse | StoreType[]>
) {
  const {page = ""}:{page?:string} = req.query;
  const prisma = new PrismaClient();
  
  if(page){
    const count = await prisma.store.count();
    const skipPage = parseInt(page) - 1;
    const data = await prisma.store.findMany({
      orderBy:{id:'asc'},
      take:10,
      skip: skipPage * 10,
    });

    res.status(200).json({
      page: parseInt(page),
      data: data,
      totalCount: count,
      totalPage: Math.ceil(count / 10)
    });
  }else{
    const stores = await prisma.store.findMany({
      orderBy: {id:"asc"},
    })
    return res.status(200).json(stores)
  }


}