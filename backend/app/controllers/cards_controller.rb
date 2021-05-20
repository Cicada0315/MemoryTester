class CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]
  
  # GET /cards
  def index
    if params[:category_id]
      @category=Category.find_by(id: params[:category_id])
      @cards=@category.cards
    else
      @cards = Card.all
      
    end
      render json: @cards
  end

  # GET /cards/1
  def show
    render json: @card
  end

  # POST /cards
  def create
    @card = Card.new(card_params)

    if @card.save
      render json: {
        status: 201,
        store: @card
      }, status: :created, location: card_path(@card)
    else
      render json: {
        status: 422,
        errors: @card.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cards/1
  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cards/1
  def destroy
    @card.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card
      @card = Card.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def card_params
      params.require(:card).permit(:name, :url, :category_id)
    end
end
