class Vehicle < ApplicationRecord    
    def mileage_status
        return 'unavailable' if mileage.nil?
        if mileage < 10000
            return 'low'
        elsif mileage < 100000
            return 'medium'
        else
            return 'high'
        end
    end

    before_save do
        if engine_status.nil?
            self.engine_status = 'works'
        end
    end
end
