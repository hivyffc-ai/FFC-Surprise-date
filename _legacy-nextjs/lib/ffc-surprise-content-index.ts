/**
 * FFC SURPRISE CONTENT - MASTER INDEX
 * Combines all unique content files and provides unified access
 */

// Import all content from all files
import {
  SurpriseKeywordContent,
  birthdaySurpriseForBoyfriendContent,
  birthdaySurpriseForGirlfriendContent,
  birthdaySurpriseForHusbandContent,
  birthdaySurpriseForWifeContent,
  anniversarySurpriseForHusbandContent,
  anniversarySurpriseForWifeContent,
  midnightBirthdaySurpriseContent,
  romanticBirthdaySurpriseContent,
  surpriseProposalContent,
  surpriseDateIdeasContent,
  surpriseDateForBoyfriendContent,
  surpriseDateForGirlfriendContent,
  surpriseDateForHusbandContent,
  surpriseDateForWifeContent,
} from './ffc-surprise-content';

import {
  surprisePartyForBoyfriendContent,
  surprisePartyForGirlfriendContent,
  valentinesSurpriseContent,
  surpriseRoomDecorationContent,
  surpriseBalloonDecorationContent,
  surpriseGiftForBoyfriendContent,
  surpriseGiftForGirlfriendContent,
} from './ffc-surprise-content-2';

import {
  firstAnniversarySurpriseContent,
  fifthAnniversarySurpriseContent,
  twentyFifthBirthdaySurpriseContent,
  thirtiethBirthdaySurpriseContent,
  weddingAnniversarySurpriseContent,
  surpriseCelebrationVenueContent,
} from './ffc-surprise-content-3';

import {
  fiftiethBirthdaySurpriseContent,
  bestBirthdaySurpriseContent,
  surpriseProposalPlannersContent,
  surpriseDatePlannersContent,
  newYearSurpriseContent,
  honeymoonSurpriseContent,
} from './ffc-surprise-content-4';

import {
  diwaliSurpriseContent,
  surpriseDinnerForHusbandContent,
  surpriseDinnerForWifeContent,
  firstDateSurpriseContent,
  luxurySurpriseCelebrationContent,
} from './ffc-surprise-content-5';

import {
  birthdaySurprisePlannersContent,
  budgetSurprisePartyContent,
  christmasSurpriseContent,
  holiSurpriseContent,
  karwaChauthSurpriseContent,
  privateSurprisePartyContent,
  romanticSurpriseContent,
  rooftopSurprisePartyContent,
  surpriseAnniversaryDateContent,
  surpriseAnniversaryPartyContent,
  surpriseBirthdayPartyContent,
  surpriseDateDecorationContent,
  surpriseDateNightContent,
  surpriseDatePlacesContent,
  surpriseDateSetupContent,
} from './ffc-surprise-content-6';

// Re-export the interface
export type { SurpriseKeywordContent };

// Master content map - ALL 53 unique content entries
const masterContentMap: Record<string, SurpriseKeywordContent> = {
  // Birthday Surprises
  "birthday-surprise-for-boyfriend-vadodara": birthdaySurpriseForBoyfriendContent,
  "birthday-surprise-for-girlfriend-vadodara": birthdaySurpriseForGirlfriendContent,
  "birthday-surprise-for-husband-vadodara": birthdaySurpriseForHusbandContent,
  "birthday-surprise-for-wife-vadodara": birthdaySurpriseForWifeContent,
  "midnight-birthday-surprise-vadodara": midnightBirthdaySurpriseContent,
  "romantic-birthday-surprise-vadodara": romanticBirthdaySurpriseContent,
  "best-birthday-surprise-vadodara": bestBirthdaySurpriseContent,
  "25th-birthday-surprise-vadodara": twentyFifthBirthdaySurpriseContent,
  "30th-birthday-surprise-vadodara": thirtiethBirthdaySurpriseContent,
  "50th-birthday-surprise-vadodara": fiftiethBirthdaySurpriseContent,
  "birthday-surprise-planners-vadodara": birthdaySurprisePlannersContent,
  "surprise-birthday-party-vadodara": surpriseBirthdayPartyContent,
  
  // Anniversary Surprises
  "anniversary-surprise-for-husband-vadodara": anniversarySurpriseForHusbandContent,
  "anniversary-surprise-for-wife-vadodara": anniversarySurpriseForWifeContent,
  "1st-anniversary-surprise-vadodara": firstAnniversarySurpriseContent,
  "5th-anniversary-surprise-vadodara": fifthAnniversarySurpriseContent,
  "wedding-anniversary-surprise-vadodara": weddingAnniversarySurpriseContent,
  "surprise-anniversary-date-vadodara": surpriseAnniversaryDateContent,
  "surprise-anniversary-party-vadodara": surpriseAnniversaryPartyContent,
  
  // Surprise Dates
  "surprise-date-ideas-vadodara": surpriseDateIdeasContent,
  "surprise-date-for-boyfriend-vadodara": surpriseDateForBoyfriendContent,
  "surprise-date-for-girlfriend-vadodara": surpriseDateForGirlfriendContent,
  "surprise-date-for-husband-vadodara": surpriseDateForHusbandContent,
  "surprise-date-for-wife-vadodara": surpriseDateForWifeContent,
  "first-date-surprise-vadodara": firstDateSurpriseContent,
  "surprise-date-night-vadodara": surpriseDateNightContent,
  "surprise-date-places-vadodara": surpriseDatePlacesContent,
  "surprise-date-setup-vadodara": surpriseDateSetupContent,
  "surprise-date-decoration-vadodara": surpriseDateDecorationContent,
  
  // Surprise Parties
  "surprise-party-for-boyfriend-vadodara": surprisePartyForBoyfriendContent,
  "surprise-party-for-girlfriend-vadodara": surprisePartyForGirlfriendContent,
  "private-surprise-party-vadodara": privateSurprisePartyContent,
  "rooftop-surprise-party-vadodara": rooftopSurprisePartyContent,
  "budget-surprise-party-vadodara": budgetSurprisePartyContent,
  
  // Proposals
  "surprise-proposal-vadodara": surpriseProposalContent,
  "surprise-proposal-planners-vadodara": surpriseProposalPlannersContent,
  
  // Surprise Gifts
  "surprise-gift-for-boyfriend-vadodara": surpriseGiftForBoyfriendContent,
  "surprise-gift-for-girlfriend-vadodara": surpriseGiftForGirlfriendContent,
  
  // Decorations
  "surprise-room-decoration-vadodara": surpriseRoomDecorationContent,
  "surprise-balloon-decoration-vadodara": surpriseBalloonDecorationContent,
  
  // Dinners
  "surprise-dinner-for-husband-vadodara": surpriseDinnerForHusbandContent,
  "surprise-dinner-for-wife-vadodara": surpriseDinnerForWifeContent,
  
  // Romantic
  "romantic-surprise-vadodara": romanticSurpriseContent,
  
  // Seasonal & Festivals
  "valentines-surprise-vadodara": valentinesSurpriseContent,
  "diwali-surprise-vadodara": diwaliSurpriseContent,
  "new-year-surprise-vadodara": newYearSurpriseContent,
  "christmas-surprise-vadodara": christmasSurpriseContent,
  "holi-surprise-vadodara": holiSurpriseContent,
  "karwa-chauth-surprise-vadodara": karwaChauthSurpriseContent,
  
  // Other
  "surprise-date-planners-vadodara": surpriseDatePlannersContent,
  "surprise-celebration-venue-vadodara": surpriseCelebrationVenueContent,
  "honeymoon-surprise-vadodara": honeymoonSurpriseContent,
  "luxury-surprise-celebration-vadodara": luxurySurpriseCelebrationContent,
};

/**
 * Get unique handcrafted content for a keyword page
 * Returns null if no unique content exists (falls back to template)
 */
export function getUniqueKeywordContent(slug: string): SurpriseKeywordContent | null {
  return masterContentMap[slug] || null;
}

/**
 * Check if a keyword has unique content
 */
export function hasUniqueContent(slug: string): boolean {
  return slug in masterContentMap;
}

/**
 * Get all slugs with unique content
 */
export function getAllKeywordsWithContent(): string[] {
  return Object.keys(masterContentMap);
}

/**
 * Get count of unique content entries
 */
export function getUniqueContentCount(): number {
  return Object.keys(masterContentMap).length;
}

// Export individual content for direct access if needed
export {
  // Batch 1
  birthdaySurpriseForBoyfriendContent,
  birthdaySurpriseForGirlfriendContent,
  birthdaySurpriseForHusbandContent,
  birthdaySurpriseForWifeContent,
  anniversarySurpriseForHusbandContent,
  anniversarySurpriseForWifeContent,
  midnightBirthdaySurpriseContent,
  romanticBirthdaySurpriseContent,
  surpriseProposalContent,
  surpriseDateIdeasContent,
  surpriseDateForBoyfriendContent,
  surpriseDateForGirlfriendContent,
  surpriseDateForHusbandContent,
  surpriseDateForWifeContent,
  // Batch 2
  surprisePartyForBoyfriendContent,
  surprisePartyForGirlfriendContent,
  valentinesSurpriseContent,
  surpriseRoomDecorationContent,
  surpriseBalloonDecorationContent,
  surpriseGiftForBoyfriendContent,
  surpriseGiftForGirlfriendContent,
  // Batch 3
  firstAnniversarySurpriseContent,
  fifthAnniversarySurpriseContent,
  twentyFifthBirthdaySurpriseContent,
  thirtiethBirthdaySurpriseContent,
  weddingAnniversarySurpriseContent,
  surpriseCelebrationVenueContent,
  // Batch 4
  fiftiethBirthdaySurpriseContent,
  bestBirthdaySurpriseContent,
  surpriseProposalPlannersContent,
  surpriseDatePlannersContent,
  newYearSurpriseContent,
  honeymoonSurpriseContent,
  // Batch 5
  diwaliSurpriseContent,
  surpriseDinnerForHusbandContent,
  surpriseDinnerForWifeContent,
  firstDateSurpriseContent,
  luxurySurpriseCelebrationContent,
  // Batch 6
  birthdaySurprisePlannersContent,
  budgetSurprisePartyContent,
  christmasSurpriseContent,
  holiSurpriseContent,
  karwaChauthSurpriseContent,
  privateSurprisePartyContent,
  romanticSurpriseContent,
  rooftopSurprisePartyContent,
  surpriseAnniversaryDateContent,
  surpriseAnniversaryPartyContent,
  surpriseBirthdayPartyContent,
  surpriseDateDecorationContent,
  surpriseDateNightContent,
  surpriseDatePlacesContent,
  surpriseDateSetupContent,
};
