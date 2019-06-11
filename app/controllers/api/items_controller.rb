class Api::ItemsController < ApplicationController
    def index
        render json: Menu.items.all
    end

    def create
        item = Menu.items.new(item_params)
        if item.save
            render json: item
        # else 
        #     render json: {errors: menu.errors}, status :unprocessable_entity
        else
              render json: {errors: item.errors}

        end
    end

    def update
        item = Menu.items.find(params[:menu_id])
        render json: menu

    end

    def destroy
        Menu.items.find(params[:menu_id]).destroy
        render json: {message: 'Item Deleted'}
    end 

    private

    def item_params
        params.require(:item).permit(:name, :description, :price)
        
    end
end

