class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :destroy]

  # GET /categories
  def index
    @categories = Category.all
    
    render json: @categories, only: [:id, :name], include: {
      cards: {
        only: [:id, :name, :url, :category_id] 
      }
    }
  end

  # GET /categories/1
  def show
    render json: @category, only: [:id, :name], include: {
      cards: {
        only: [:id, :name, :url] 
      }
    }
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: {
        status: 201,
        category: @category
      }, status: :created, location: category_path(@category)
    else
      render json: {
        status: 422,
        errors: @category.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  def destroy
    if @category.destroy
      render json: {
        message: "Successfully deleted", 
        category: @category
      }
    else
      render json: {
        message: "Failed to delete"
      }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      # using `fetch` you can supply a default and use
      # the Strong Parameters API from there. 
      params.fetch(:category, {}).permit(:name, cards_attributes: [:name, :url])
      ##params.require(:category).permit(:name, cards_attributes: [:name, :url])
    end
end
