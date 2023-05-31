import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import AutoGrid from "../../../components/AutoGrid";
import Box from "../../../components/Box";
import Center from "../../../components/Center";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import Text from '../../../components/Text';

const BoxCard: FC<PropsWithChildren> = ({children}) => {
    return <Box style={{flex: 1, height: '100%'}}>
        <Column style={{padding: 20, gap: 20, height: '100%', alignItems: 'center'}}>
            {children}
        </Column>
    </Box>
}

export default async function(){
    return (
        <>
        <Text.Header>
            Full stack web and native development
        </Text.Header>
        <Text.SubHeader>
            MVP, MMP, or new features to existing products
        </Text.SubHeader>
        <AutoGrid
            style={{gap: 30, padding: 30}}
            expand={true}
            min={'250px'}
        >
            <BoxCard>
                <Text.SubHeader>
                    MVP app from €5,000
                </Text.SubHeader>
                <Text.Body>
                    <Text.Faded>
                        Since I work solo, none of the hours you pay for go into admin, or management. 
                        Meetings, demos, product talks, and anything related also comes free of charge, so <Text.Full style={{whiteSpace: 'nowrap'}}>you only pay for development</Text.Full> 
                    </Text.Faded>
                </Text.Body>
            </BoxCard>
            <BoxCard>
                <Text.SubHeader>
                    Product x Tech sparring
                </Text.SubHeader>
                <Text.Body>
                    <Text.Faded>
                        With experience doing product developement as well as software development, 
                        I can help iron out features and product overall, to make sure no effort or resource is wasted. That&apos;s how we <Text.Full style={{whiteSpace: 'nowrap'}}><Link href={'/contact/book'}>get started</Link></Text.Full>.
                    </Text.Faded>
                </Text.Body>
            </BoxCard>
            <BoxCard>
                <Text.SubHeader>
                    Anything can be done
                </Text.SubHeader>
                <Text.Body>
                    <Text.Faded>
                        But usually the simpler you manage to make your product, the better. 
                        I&apos;ve done a lot of different things, and I pick up new tech all the time. Let me know what you need, and I&apos;ll get on it. If it&apos;s new to me, I&apos;ll be transparent about it and offer a lower rate on it too
                    </Text.Faded>
                </Text.Body>
            </BoxCard>
        </AutoGrid>
        
        <Column style={{gap: 30, padding: 30}}>
            <Box>
                <Text.SubHeader>
                    My competitive edge
                </Text.SubHeader>
                <Text.Body>
                    
                </Text.Body>
            </Box>
            <Box>
                <Text.SubHeader>
                    Startups and tight budgets
                </Text.SubHeader>
                <Text.Body>
                    Budgets can be tight or might not exist in startups. 
                    Or maybe you&apos;re in the middle, on your way to scaling and expanding quickly with all the means. In that case - lets talk
                    If you&apos;re not, and still working on an idea stage, we might still be able to work something out. 
                    I do value a good product so pitch me and we&apos;ll see what model works for your company, that being a loan structure, equity, or fewer hours. 
                    There&apos;s usually always a way, if the product is good.
                </Text.Body>
            </Box>
            <Box>
                <Text.SubHeader>Scaleups and bigger</Text.SubHeader>
                <Box style={{padding: 10}}>
                    <a href={'https://arxiv.org/pdf/1801.06475.pdf'}>
                        &quot;[...] it seems the problem is
                        only that with increasing people the communication effort
                        increases strongly. Yet, a high fraction of effort on communication seems like a good investment.&quot;
                    </a>
                </Box>
                <Text.Body>

                    Even in an ideal world, as development teams grow, the total productivity increases, at the cost of productivity per developer.
                    This is just a consequence of people having to work together. In other words, as the size of a team goes up, productivity per member goes down.  
                    To scale a company, and increase development output, it&apos;s a necessary &quot;evil&quot; to simply hire more developers.
                    So that&apos;s where hiring a solo developer has benefits. Depending on your company and it&apos;s existing tech, there are pros and cons. 
                    In a startup and working from scratch, there are really only benefits as it&apos;s also usually what you&apos;d do.
                    When it comes to existing codebases and tech, you&apos;d have to consider integration costs. A feature or product can be either built-in, or made as a standalone api, depending on your current solution.
                    As you only pay for development, figuring out what solution would work for you happens before paying for anything at all.
                </Text.Body>
            </Box>
        </Column>
        </>
    )
}