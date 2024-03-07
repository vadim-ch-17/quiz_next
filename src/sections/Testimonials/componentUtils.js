import cheerio from 'cheerio';

export const getDataReviews = (reviews) => {
    const $ = cheerio.load(reviews);
    const tempReviewsData = [];
    $('.review').each((index, element) => {
        const title = $(element).find('.review-title').text();
        const reviwerName = $(element).find('.reviewer-name').text();
        const reviwerImage = $(element).find('.avatar').attr('srcset');
        const rating = $(element).find('.wporg-ratings').attr('data-rating');
        const reviewBody = $(element).find('.review-body').text();

        tempReviewsData.push({ title, name: reviwerName, rating: +rating, userReview: reviewBody, user_avatar: reviwerImage });
    });
    return tempReviewsData
}