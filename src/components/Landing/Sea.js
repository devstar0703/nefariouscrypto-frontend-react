import * as React from 'react' ;

import { LetterDiv, SmallTitle, Title, SeaDiv, ImageDiv } from './Styles/Sea.styles';
import { WaveDiv, WaveLine } from './Styles/MintNow.styles';

const Sea = () => {
    return (
        <SeaDiv>
            <LetterDiv>
                <SmallTitle>
                    About
                </SmallTitle>
                <Title>
                    Introducing the Pirate Ship Life NFT Project!
                </Title>

                <WaveDiv style={{justifyContent : 'flex-start'}}>
                    {
                        [...Array(5)].map((item, index) => (
                            <WaveLine key={index}/>
                        ))
                    }
                </WaveDiv>
                
                <br/><br/>
                <p>GDAY from the crew of Nefarious Crypto a piece of functional metal art.</p>
                <br/>
                <p>Constructed over 3 years with the help and the skill of many.</p>
                <br/>
                <p>Australia is girthed by sea</p>
                <p>There's 3 ways off the continent</p>
                <p>AIR WATER DIE</p>
                <p>That's your choice</p>
                <br/>
                <p>So from young your drawn to the sea drawn to watch the sky's</p>
                <p>You see the horizon</p>
                <p>What's over there</p>
                <p>How do I get there</p>
                <p>And you soon learn that exiting isn't as easy as it could be</p>
                <br/>
                <p>Visiting other counties other people's other places that arn't Australia isn't easy.</p>
                <p>At least now e have a secured vessel for exit.</p>
                <p>I've lived on every continent except Antarctica.</p>
                <p>There isn’t one that you can’t exit into another country via road or even walk if need be, not one. The ones I’ve lived on not Antarctica</p>
                <p>That’s why you will see an Australian everywhere we are just showing we can. Not to you but to ourselves.</p>
                <p>Nefarious is the theme of the vessel</p>
                <p>We don’t skimp on safety but we are goal driven and pragmatic. If a situation calls for special skills or equipment, all can be got, just comes down to budget timeline willpower and again budget</p>
                <p>From underwater broco thermal lances to mustang full survival suits diving gear .</p>
                <p>reinforced hull 4 airtight compartments compressors all standard gear on Nefarious Crypto</p>
                <p>Some people’s needs will exceed the vessels capacity, in this case arrangements can be made for whatever is needed</p>
                <p>Different jobs need different tools</p>
                <p>Own the majority of the collection</p>
                <p>send the boat wherever you want</p>
                <p>go wherever you want</p>
                <p>Here’s some backstory</p>
                <p>Over the last three years a project was commenced and finished</p>
                <p>To purchase strip and rebuild a vessel customizing  it into a boarding vessel</p>
                <p>Whom doesn’t want a private pirate vessel able to sneak around ram and  board another vessel and in comfort and strength not encouraging these acts more of an educational exercise really</p>
                <p>There are people like me all over the world some are nice some aren’t but all are</p>
                <p>strong</p>
                <p>skilled</p>
                <p>smart and dedicated.</p>
                <p>I’m older than most doesn’t mean I don’t do stuff for shits and giggles just means I know what pear shape is and I do my best to make that situation happen to the other side.</p>
                <p>I also happen to know and like a fair few of them they can use my boat and I can use theirs.</p>
                <p>If you can’t supply your own crew one can be hired</p>
                <p>A WORD TO THE WISE SHOULD SUFFICE</p>
                <p>The boat can be sent anywhere whomever sends it pays the bill. Not cheap but loyal and silent is the best type to hire.</p>
                <p>During the creation of this vessel there were two phases after its initial purchase a 12 month period of traveling to the border spending weekends making it sea worthy enough with a new motor for its trip south into bass strait this is not for the feint hearted .</p>
                <p>The second stage was getting it up on hard stand and gutting it completely sandblasting all surfaces inside and out windows out and 50 years of other people’s jerry rigged fixes</p>
                <p>Now THE METAL ART BEGINS</p>
                <p>When you view the whole collection you can see the skill of the onsite fabrication done by our own fabricator whom has been a shipwright engineer for over 30 years he also comes with the crew not much can’t be done with the right 4 fellas 3 if no miracles needed.</p>
                <p>From the complete rewelding and reinforcing the hull to adding internal airtight compartments using all the most current welding techniques  to the installing of a purpose made rear watertight door using the same hatch mechanisms to the newly fitted front bunkroom and front holding compartment.</p>
                <p>A rear duck board was fabricated on site and rear gateway rear ladder and stainless steel upper deck flybridge 72 nm open array radar 3d sonar she’s a ripper.</p>
                <p>A complete wave breaker and bow reinforcement was done on site and does it make a difference</p>
                <p>Front steps and the entire  window bow section cut out and replaced and reinforced </p>
                <p>Complete new wiring and plumbing new tanks water and fuel new insulation through out</p>
                <p>Rear Crane mounts installed and front Tripod mounts installed These come in handy</p>
                <p>If you know you know</p>
                <p>If your into creation</p>
                <p>If your into s and g</p>
                <p>If your into reuse repurpose recycle</p>
                <p>If your into pirate ships</p>
                <p>This was headed to the scrap heap to become someone’s next 4 inch nail</p>
                <p>Now It’s a functioning pirate vessel</p>
                <p>Nefarious is the brand name of the hydroponic plant formulation and equipment that we manufacture here.</p>
                <p>We have been doing it for over thirty years</p>
                <p>Some of the images are of those items</p>
                <p>All these streams lead to the ability in skill finance and grit to complete this pirate vessel</p>
                <p>Things very rarely just appear there was/were a process for that thing to occur or appear at that time</p>
                <p>So they are all the sum of the whole</p>
                <p>Owners of the collection can contact me day or night</p>
                <p>Miracles take an extra 30 minutes keep that in mind</p>
                <br/>
                <p>Regards, T</p>
            </LetterDiv>
            <ImageDiv />
        </SeaDiv>
    )
}

export default Sea ;